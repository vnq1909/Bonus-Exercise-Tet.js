function sample(param1) {
    if (param1 === undefined) {
        throw new Error('thieu tham so ');
    }
    return param1;
}

mandatory = () => { throw new Error('thieu tham so');}

sample = (param1 = mandatory()) => param1

