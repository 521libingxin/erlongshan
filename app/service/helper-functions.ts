// TODO terrible code, optimise later
export function domIdObserver(id: string, counter: number = 0): Promise<any> {
    return new Promise((resolve, reject) => {
        // If element is found pack it into resolve
        if (document.getElementById(id)) {
            resolve(document.getElementById(id));
        }
        // if element is not found and counter is up return error message
        // TODO fine tune counter
        else if (counter >= 10) {
            reject("timeout");
        }
        else {
            setTimeout(() => {
                domIdObserver(id, ++counter).then(
                    (res) => {
                        resolve(res);
                    },
                    (rej) => {
                        reject(rej);
                    }
                );
            }, 100)
        }
    });
}