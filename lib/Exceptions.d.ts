import { SessionStatus, TypeStrings } from "./Enums";
/**
 * An Exception is considered a condition that a reasonable application may wish to catch.
 * An Error indicates serious problems that a reasonable application should not try to catch.
 */
export declare abstract class Exception extends Error {
    protected constructor(message?: string);
}
export declare namespace Exceptions {
    /**
     * Indicates that the operation could not be completed given the current transaction state.
     */
    class TransactionStateError extends Exception {
        constructor(message?: string);
    }
    /**
     * Indicates the session description handler has closed.
     * Occurs when getDescription() or setDescription() are called after close() has been called.
     * Occurs when close() is called while getDescription() or setDescription() are in progress.
     */
    class ClosedSessionDescriptionHandlerError extends Exception {
        constructor();
    }
    /**
     * Indicates the session terminated before the action completed.
     */
    class TerminatedSessionError extends Exception {
        constructor();
    }
    /**
     * Transport error.
     */
    class TransportError extends Exception {
        constructor(message?: string);
    }
    /**
     * Unsupported session description content type.
     */
    class UnsupportedSessionDescriptionContentTypeError extends Exception {
        constructor(message?: string);
    }
}
/**
 * DEPRECATED: The original implementation of exceptions in this library attempted to
 * deal with the lack of type checking in JavaScript by adding a "type" attribute
 * to objects and using that to discriminate. On top of that it layered allcoated
 * "code" numbers and constant "name" strings. All of that is unnecessary when using
 * TypeScript, inheriting from Error and properly setting up the prototype chain...
 */
declare abstract class LegacyException extends Exception {
    type: TypeStrings;
    name: string;
    message: string;
    code: number;
    constructor(code: number, name: string, message: string);
}
export declare namespace Exceptions {
    class ConfigurationError extends LegacyException {
        parameter: string;
        value: any;
        constructor(parameter: string, value?: any);
    }
    class InvalidStateError extends LegacyException {
        status: SessionStatus;
        constructor(status: SessionStatus);
    }
    class NotSupportedError extends LegacyException {
        constructor(message: string);
    }
    class RenegotiationError extends LegacyException {
        constructor(message: string);
    }
    class MethodParameterError extends LegacyException {
        method: string;
        parameter: string;
        value: any;
        constructor(method: string, parameter: string, value: any);
    }
    class SessionDescriptionHandlerError extends LegacyException {
        error: string | undefined;
        method: string;
        constructor(method: string, error?: string, message?: string);
    }
}
export {};
