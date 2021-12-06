import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'cdc9bae538f64a22ba95e5e04cabe55c',
        });
    }
}

export default AppLoader;
