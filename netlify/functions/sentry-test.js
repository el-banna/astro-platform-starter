export default async (request, context) => {
    try {
        const data = await request.json();
        console.log(data);
        return Response.json(data);
    } catch (error) {
        console.log(error);
        return Response.json({ error: 'Failed fetching data' }, { status: 500 });
    }
};
