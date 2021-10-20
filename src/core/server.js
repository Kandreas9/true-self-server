const port = process.env.PORT || 3000;

/*---Start Server---*/
const server = (app) => {
    app.listen(port, () => {
        console.log(`===Server is up on port ${port}===`);
    });
};

export default server;
