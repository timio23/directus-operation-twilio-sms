export default {
	id: 'operation-twilio-sms',
	handler: ({ phone_number, message }, { env }) => {
		const twilio = require('twilio');
		const accountSid = env.TWILIO_ACCOUNT_SID;
		const authToken = env.TWILIO_AUTH_TOKEN;
		const from_number = env.TWILIO_PHONE_NUMBER;
		const client = new twilio(accountSid, authToken);

		client.messages.create({
			body: message,
			to: phone_number, 
			from: from_number,
		}).then((rsp) => {
			return rsp;
		}).catch((error) => {
			console.error(error);
			return error;
		});
	},
};
