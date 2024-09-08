import log, {Logger as LogLeveLogger} from 'loglevel';

class Logger {

    private logger: LogLeveLogger;

    constructor({componentName = 'default'}: {componentName?: string}) {
        console.log('----' + componentName);
        this.logger = log.getLogger(componentName)
    }

    info(...args: unknown[]): void {
        this.logger.info(...args);
    }

    debug(...args: unknown[]): void {
        this.logger.debug(...args);
    }

    error(...args: unknown[]): void {
        this.logger.error(...args);
    }
}

export default Logger;

