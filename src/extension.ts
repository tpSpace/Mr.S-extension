// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {Position} from 'vscode';
import { quote } from './randomQuote';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "Mr.S" is now active!');
	
	// the extension will keep track the cursor position. If the position of the cursor doesn't change in 5 minutes, the extension will show a message
	let lastPosition: Position | undefined = undefined;
	let timeoutTime: number = .1 * 60 * 1000; // 5 minutes
	let button: vscode.MessageItem = { title: "OK" };


	// get the position of the cursor
	function getPosition(): Position | undefined {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const position = editor.selection.active;
			if (position) {
				return position;
			}
		}
		return undefined;
	}

	setInterval(() => {
		const position = getPosition();
		if (position) {
			if ( lastPosition && lastPosition.line === position.line && lastPosition.character === position.character) {
			
				vscode.window.showInformationMessage(quote(), button).then(() => {
					// do nothing
					console.log("OK");
					lastPosition = undefined;
					
				});
			}
			lastPosition = position;
		} 
	}, timeoutTime);
	// context.subscriptions.push();
}

