const { model, Schema } = require("mongoose");

const MessageModel = new Schema(
	{
		chatId: {
			type: Schema.Types.ObjectId,
			ref: "Chat",
		},
		content: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = model("Message", MessageModel);
