export default async (request, context) => {
    try {
        return Response.json({ message: 'hello world' });
    } catch (error) {
        console.log(error);
        return Response.json({ error: 'Failed fetching data' }, { status: 500 });
    }
};
