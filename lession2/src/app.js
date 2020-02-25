// import useImmer from 'dva-immer'
export const dva = {
    config: {
        onError(e) {
            e.preventDefault();
            console.error(e.message);
        },
        // ...useImmer(), // 这是第二个引入immer的方式； 
    },
    // ...useImmer(),
    plugins: [
        require('dva-logger')(),
        // require('dva-immer')(), // 这个方式引入immer不行
    ],
}