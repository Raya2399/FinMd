const ZERO_WHATSAPP_USER = '0@s.whatsapp.net';

class BotDetector {
  constructor(timeout, quarantine) {
    this.timeout = timeout;
    this.quarantine_jids = {};
    this.ignore_jids = {};
    this.activity_id = {};
    this.quarantine = quarantine;
  }

  addIgnore(jid) {
    this.ignore_jids[jid] = Date.now();
  }

  deleteIgnore(jid) {
    delete this.ignore_jids[jid];
  }

  isIgnored(jid) {
    return this.ignore_jids[jid];
  }

  addQuarantine(jid) {
    this.quarantine_jids[jid] = Date.now();
  }

  deleteQuarantine(jid) {
    delete this.quarantine_jids[jid];
  }

  isQuarantined(jid) {
    return this.quarantine_jids[jid];
  }

  addActivityID(activityID, timestamp) {
    this.activity_id[activityID] = timestamp;
  }

  deleteActivityID(activityID) {
    delete this.activity_id[activityID];
  }

  isMatchTime(quotedID, messageTimestamp) {

    let data = this.activity_id[quotedID];
    console.log(data, messageTimestamp);

    if ((messageTimestamp - data) <= this.timeout) {
      return true;
    } else {
      this.deleteActivityID(quotedID);
    }

    return false;
  }

  isBot(senderUser, messageID, quotedID, participant, messageTimestamp) {
    let quarantineSender = senderUser;
    let detected = false;

    if (this.isQuarantined(quarantineSender)) {
      detected = true;
    }

    if (!detected) {
      if (this.isIgnored(quarantineSender)) {
        detected = false;
      }

      if (participant === ZERO_WHATSAPP_USER) {
        detected = true;
      }

      if (this.isMatchTime(quotedID, messageTimestamp)) {
        detected = true;
      }

      if (detected && this.quarantine) {
        this.addQuarantine(quarantineSender);
      }
    }

    this.addActivityID(messageID, messageTimestamp);
    return detected;
  }

}


module.exports = BotDetector;

