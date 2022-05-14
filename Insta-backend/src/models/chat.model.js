const { model, Schema } = require("mongoose");

const ChatModel = new Schema(
	{
		sender: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		receiver: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = model("Chat", UserModel);
