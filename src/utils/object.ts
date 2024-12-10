/*
* Recursively merge properties of two objects 
*/
export function merge(target: any, source: any) {

    for (const key in source) {
        try {
            if (source[key].constructor == Object) {
                target[key] = merge(target[key], source[key]);
            } else if(target[key] === undefined) {
                target[key] = source[key];
            }
        } catch (e) {
            target[key] = source[key];

        }
    }

    return target;
}