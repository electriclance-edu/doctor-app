class Account {
    static userCount = "1999999999999999";

    static generateUserID() {
        for (let i = Account.userCount.length - 1; i >= 0; i--) {
            let digit = Account.userCount.charAt(i);
            digit++;

            if (digit === 10) {

            } else {
                
                break;
            }
        }
    }
}