/// <reference path="jquery.d.ts" />
/// <reference path="underscore.d.ts" />
declare module Coveo.MagicBox {
    class Result {
        expression: Expression;
        input: string;
        value: string;
        subResults: Result[];
        parent: Result;
        constructor(value: string | Result[], expression: Expression, input: string);
        isSuccess(): any;
        /**
         * Return path to this result ([parent.parent, parent, this])
         */
        path(until?: Result): Result[];
        /**
         * Return the closest parent that match the condition (can be it-self). If match is a string, it will search for the result expresion id
         */
        findParent(match: string | {
            (result: Result): boolean;
        }): Result;
        /**
         * Return the first child that match the condition (can be it-self). If match is a string, it will search for the result expresion id
         */
        find(match: string | {
            (result: Result): boolean;
        }): Result;
        /**
        * Return all children that match the condition (can be it-self). If match is a string, it will search for the result expresion id
        */
        findAll(match: string | {
            (result: Result): boolean;
        }): Result[];
        /**
         * Return the first child that match the condition (can be it-self). If match is a string, it will search for the result expresion id
         */
        resultAt(index: number, match?: string | {
            (result: Result): boolean;
        }): Result[];
        /**
        * Return all fail result.
        */
        getExpect(): Result[];
        /**
        * Return the best fail result (The farthest result who got parsed). We also remove duplicate and always return the simplest result of a kind
        */
        getBestExpect(): Result[];
        getHumanReadableExpect(): string;
        /**
         * Return a string that represent what is before this result
         */
        before(): string;
        /**
         * Return a string that represent what is after this result
         */
        after(): string;
        /**
         * Return the length of the result
         */
        getLength(): any;
        toHtmlElement(): HTMLElement;
        /**
         * Clean the result to have the most relevant result. If the result is successful just return a clone of it.
         */
        clean(path?: Result[]): Result;
        clone(): Result;
        toString(): any;
        getHumanReadable(): string;
    }
}
declare module Coveo.MagicBox {
    class EndOfInputResult extends Result {
        constructor(result: Result);
    }
}
declare module Coveo.MagicBox {
    class OptionResult extends Result {
        private result;
        expression: Expression;
        input: string;
        failAttempt: Result[];
        constructor(result: Result, expression: Expression, input: string, failAttempt: Result[]);
        /**
        * Return all fail result.
        */
        getExpect(): Result[];
        /**
         * Clean the result to have the most relevant result. If the result is successful just return a clone of it.
         */
        clean(path?: Result[]): Result;
    }
}
declare module Coveo.MagicBox {
    class RefResult extends Result {
        private results;
        expression: Expression;
        input: string;
        failAttempt: Result;
        constructor(results: Result[], expression: Expression, input: string, lastResult: Result);
        /**
        * Return all fail result.
        */
        getExpect(): Result[];
        /**
         * Clean the result to have the most relevant result. If the result is successful just return a clone of it.
         */
        clean(path?: Result[]): Result;
    }
}
declare module Coveo.MagicBox {
    type ExpressionDef = RegExp | string | string[] | ExpressionFunctionArgument;
    interface Expression {
        id: string;
        parse: (input: string, end: boolean) => Result;
    }
}
declare module Coveo.MagicBox {
    class ExpressionConstant implements Expression {
        value: string;
        id: string;
        constructor(value: string, id: string);
        parse(input: string, end: boolean): Result;
        toString(): string;
    }
}
declare module Coveo.MagicBox {
    var ExpressionEndOfInput: Expression;
}
declare module Coveo.MagicBox {
    interface ExpressionFunctionArgument {
        (input: string, end: boolean, expression: Expression): Result;
    }
    class ExpressionFunction implements Expression {
        func: ExpressionFunctionArgument;
        id: string;
        grammar: Grammar;
        constructor(func: ExpressionFunctionArgument, id: string, grammar: Grammar);
        parse(input: string, end: boolean): Result;
        toString(): string;
    }
}
declare module Coveo.MagicBox {
    class ExpressionList implements Expression {
        private parts;
        id: string;
        constructor(parts: Expression[], id: string);
        parse(input: string, end: boolean): Result;
        toString(): string;
    }
}
declare module Coveo.MagicBox {
    class ExpressionOptions implements Expression {
        parts: ExpressionRef[];
        id: string;
        constructor(parts: ExpressionRef[], id: string);
        parse(input: string, end: boolean): Result;
        toString(): string;
    }
}
declare module Coveo.MagicBox {
    class ExpressionRef implements Expression {
        ref: string;
        occurrence: string | number;
        id: string;
        grammar: Grammar;
        constructor(ref: string, occurrence: string | number, id: string, grammar: Grammar);
        parse(input: string, end: boolean): Result;
        parseOnce(input: string, end: boolean, ref: Expression): Result;
        parseMany(input: string, end: boolean, ref: Expression): RefResult;
        toString(): string;
    }
}
declare module Coveo.MagicBox {
    class ExpressionRegExp implements Expression {
        value: RegExp;
        id: string;
        constructor(value: RegExp, id: string, grammar: Grammar);
        parse(input: string, end: boolean): Result;
        toString(): string;
    }
}
declare module Coveo.MagicBox {
    class Grammar {
        start: ExpressionRef;
        expressions: {
            [id: string]: Expression;
        };
        constructor(start: string, expressions?: {
            [id: string]: ExpressionDef;
        });
        addExpressions(expressions: {
            [id: string]: ExpressionDef;
        }): void;
        addExpression(id: string, basicExpression: ExpressionDef): void;
        getExpression(id: string): Expression;
        parse(value: string): Result;
        static buildExpression(value: ExpressionDef, id: string, grammar: Grammar): Expression;
        static buildStringExpression(value: string, id: string, grammar: Grammar): Expression;
        static stringMatch(str: string, re: RegExp): string[][];
        static spliter: RegExp;
    }
}
declare module Coveo.MagicBox {
    class InputManager {
        private element;
        private onchange;
        private input;
        private clear;
        private underlay;
        private highlightContainer;
        private ghostTextContainer;
        private result;
        private wordCompletion;
        private hasFocus;
        /**
        * Binding event
        */
        onblur: () => void;
        onfocus: () => void;
        onkeyup: (key: number) => boolean;
        onkeydown: (key: number) => boolean;
        onchangecursor: () => void;
        constructor(element: HTMLElement, onchange: (text: string, wordCompletion: boolean) => void);
        /**
        * Update the input with the result value
        */
        private updateInput();
        /**
        * Update the highlight with the result value
        */
        private updateHighlight();
        /**
        * Update the ghostText with the wordCompletion
        */
        private updateWordCompletion();
        /**
        * Update the scroll of the underlay this allowed the highlight to match the text
        */
        private updateScrollDefer;
        private updateScroll(defer?);
        /**
        * Set the result and update visual if needed
        */
        setResult(result: Result, wordCompletion?: string): void;
        /**
        * Set the word completion. will be ignore if the word completion do not start with the result input
        */
        setWordCompletion(wordCompletion: string): void;
        /**
        * Set cursor position
        */
        setCursor(index: number): void;
        getCursor(): number;
        private setupHandler();
        focus(): void;
        blur(): void;
        private keydown(e);
        private keyup(e);
        private tabPress();
        private onInputChange();
        getValue(): string;
        getWordCompletion(): string;
    }
}
declare module Coveo.MagicBox {
    interface Suggestion {
        text?: string;
        index?: number;
        html?: string;
        dom?: HTMLElement;
        seperator?: string;
        onSelect?: () => void;
    }
    interface SuggestionsManagerOptions {
        selectableClass?: string;
        selectedClass?: string;
        timeout?: number;
    }
    class SuggestionsManager {
        private element;
        private pendingSuggestion;
        private options;
        constructor(element: HTMLElement, options?: SuggestionsManagerOptions);
        moveDown(): Suggestion;
        moveUp(): Suggestion;
        select(): Element;
        mergeSuggestions(suggestions: Array<JQueryPromise<Suggestion[]> | Suggestion[]>, callback?: (suggestions: Suggestion[]) => void): void;
        updateSuggestions(suggestions: Suggestion[]): void;
    }
}
declare module Coveo.MagicBox.Utils {
    function highligthText(text: string, highligth: string, ignoreCase?: boolean, matchClass?: string, doNotMatchClass?: string): string;
}
declare module Coveo.MagicBox.Grammars {
    interface SubGrammar {
        grammars?: {
            [id: string]: ExpressionDef;
        };
        expressions?: string[];
        basicExpressions?: string[];
        include?: SubGrammar[];
    }
    function Expressions(...subGrammars: SubGrammar[]): {
        start: string;
        expressions: {
            [id: string]: ExpressionDef;
        };
    };
    function ExpressionsGrammar(...subGrammars: SubGrammar[]): Grammar;
}
declare module Coveo.MagicBox.Grammars {
    var notWordStart: string;
    var notInWord: string;
    var Basic: SubGrammar;
}
declare module Coveo.MagicBox.Grammars {
    var SubExpression: SubGrammar;
}
declare module Coveo.MagicBox.Grammars {
    var Field: SubGrammar;
}
declare module Coveo.MagicBox.Grammars {
    var QueryExtension: SubGrammar;
}
declare module Coveo.MagicBox.Grammars {
    var NestedQuery: SubGrammar;
}
declare module Coveo.MagicBox.Grammars {
    var Complete: SubGrammar;
}
declare module Coveo {
    var $: JQueryStatic;
}
declare module Coveo.MagicBox {
    interface Options {
        inline?: boolean;
        selectableSuggestionClass?: string;
        selectedSuggestionClass?: string;
        suggestionTimeout?: number;
    }
    class Instance {
        element: HTMLElement;
        grammar: Grammar;
        options: Options;
        onblur: () => void;
        onfocus: () => void;
        onchange: () => void;
        onsuggestions: (suggestions: Suggestion[]) => void;
        onsubmit: () => void;
        onselect: (suggestion: Suggestion) => void;
        gulp: any;
        onclear: () => void;
        getSuggestions: () => Array<JQueryPromise<Suggestion[]> | Suggestion[]>;
        private inputManager;
        private suggestionsManager;
        private clearDom;
        private lastSuggestions;
        private result;
        private displayedResult;
        constructor(element: HTMLElement, grammar: Grammar, options?: Options);
        getResult(): Result;
        getDisplayedResult(): Result;
        setText(text: string): void;
        setCursor(index: number): void;
        getCursor(): number;
        resultAtCursor(match?: string | {
            (result: Result): boolean;
        }): Result[];
        private setupHandler();
        showSuggestion(): void;
        private updateSuggestion(suggestions);
        focus(): void;
        blur(): void;
        clearSuggestion(): void;
        private focusOnSuggestion(suggestion);
        private getFirstSuggestionText();
        getText(): string;
        getWordCompletion(): string;
        clear(): void;
    }
    function create(element: HTMLElement, grammar: Grammar, options?: Options): Instance;
    function requestAnimationFrame(callback: () => void): number;
}
