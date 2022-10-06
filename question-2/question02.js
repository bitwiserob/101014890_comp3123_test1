const successMsg = { message: 'delayed success!' };
const errorMsg = { error: 'delayed exception!' };

resolvedPromise = function() {
    return new Promise((resolve, reject) => {
        const success = true;

        if(success) {
            setTimeout(() => resolve(successMsg), 500);
        } else {
            setTimeout(() => reject(errorMsg), 500);
        }
    });
}

rejectedPromise = function() {
    return new Promise((resolve, reject) => {
        const success = false;

        if(success) {
            setTimeout(() => resolve(successMsg), 500);
        } else {
            setTimeout(() => reject(errorMsg), 500);
        }
    });
}

resolvedPromise().
    then(result => console.log(result)).
    catch(err => console.log(err));

rejectedPromise().
    then(result => console.log(result)).
    catch(err => console.log(err));