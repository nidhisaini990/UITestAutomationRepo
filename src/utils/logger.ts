export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LoggerInstance {
  debug: (message: string) => void;
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string | Error) => void;
}

const getCurrentLogLevel = (): LogLevel => {
  return (process.env.LOG_LEVEL as LogLevel) || 'info';
};

const logLevels: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const shouldLog = (messageLevel: LogLevel): boolean => {
  const currentLevel = getCurrentLogLevel();
  return logLevels[messageLevel] >= logLevels[currentLevel];
};

const formatMessage = (level: LogLevel, message: string): string => {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
};

export const logger: LoggerInstance = {
  debug: (message: string): void => {
    if (shouldLog('debug')) {
      console.log(formatMessage('debug', message));
    }
  },
  info: (message: string): void => {
    if (shouldLog('info')) {
      console.log(formatMessage('info', message));
    }
  },
  warn: (message: string): void => {
    if (shouldLog('warn')) {
      console.warn(formatMessage('warn', message));
    }
  },
  error: (message: string | Error): void => {
    if (shouldLog('error')) {
      const msg = message instanceof Error ? message.message : message;
      console.error(formatMessage('error', msg));
    }
  },
};
