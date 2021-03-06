﻿namespace TypeMoqIntern {

    export class Utils {

        static getUUID() {
            let d = new Date().getTime();
            let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                let r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        }

        static functionName(fun) {
            let ret = fun.toString();
            ret = ret.substr('function '.length);
            ret = ret.substr(0, ret.indexOf('('));
            return ret;
        }

        static conthunktor<U>(ctor: CtorWithArgs<U>, args: any[]): U {
            return (() => {
                let Temp = () => { }, inst, ret;
                Temp.prototype = ctor.prototype;
                inst = new Temp();
                if (_.isFunction(ctor))
                    ret = new (ctor.bind.apply(ctor, [void 0].concat(args)))();
                return _.isObject(ret) ? ret : inst;
            })();
        }
    }

}