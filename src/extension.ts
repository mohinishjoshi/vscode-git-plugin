// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { URLSearchParams } from 'url';
import * as vscode from 'vscode';
import gitCheckout from './helpers/gitCheckout';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vtaptheiaextension" is now active!');
	try{
		// const urlParams = new URLSearchParams('');
        // let branch = urlParams.get('branch') || '';
		gitCheckout('dev').then( data =>{
			console.log("Success", data);
		})
		.catch(err => {
			console.log("error", err);
		});
	} catch(err){
		console.log(err);
	}
	// vscode.commands.executeCommand('git.checkout', 'new_branch');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vtaptheiaextension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from vtaptheiaextension!');
		// console.log("Hello");
		// console.log(vscode.commands.getCommands());
		vscode.commands.executeCommand('git.checkout', 'new_branch');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
