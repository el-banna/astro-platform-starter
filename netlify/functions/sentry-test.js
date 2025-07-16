export default async (request, context) => {
    try {
        const data = JSON.parse(request.body);
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.log(error);
        return Response.json({ error: 'Failed fetching data' }, { status: 500 });
    }
};
