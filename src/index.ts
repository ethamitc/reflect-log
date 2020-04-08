import moment from 'moment';
import chalk from 'chalk';

export class Logger {
	private ctx: chalk.Chalk;
	private timestamp: string;
	constructor(options?: LogOptions) {
		this.ctx = new chalk.Instance({ level: options?.colorLevel });

		let m = moment();
		let d = this.ctx.cyan(m.format('DD/MM/YYYY'));
		let t = this.ctx.magenta(m.format('hh:mm:ss'));

		this.timestamp = '[' + this.ctx.magenta(d) + ' ' + this.ctx.cyan(t) + ']';
	}

	ts() {
		console.log(this.timestamp);
	}

	error(message: string) {
		let identifier = this.ctx.bgRed('  ERROR  ');
		let msg = `${this.timestamp} ${identifier} ${this.ctx.red(message)}`;
		console.log(msg);
	}

	warn(message: string) {
		let identifier = this.ctx.bgYellow.black(' WARNING ');
		let msg = `${this.timestamp} ${identifier} ${this.ctx.yellow(message)}`;
		console.log(msg);
	}

	log(message: string) {
		let identifier = this.ctx.inverse('   LOG   ');
		let msg = `${this.timestamp} ${identifier} ${message}`;
		console.log(msg);
	}
}

interface LogOptions {
	colorLevel: 0 | 1 | 2 | 3 | undefined;
}
/*
Error: Red
Warning: Yellow
Debug: Blue
Regular: White

Timestamp: Magenta/Cyan
*/
