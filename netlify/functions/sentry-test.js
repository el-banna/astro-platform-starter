export default async (request, context) => {
    try {
        const data = await request.json();
        const sentryEventData = data?.data?.event;
        const { title, web_url } = sentryEventData || {};

        const payload = {
            text: `🚨 ${title} 🚨 \n\n${web_url}`
        };
        await fetch(
            'https://chat.googleapis.com/v1/spaces/AAQARDFmfUI/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=dyCoVdTAoW1NxRA0aERTpNGRUYytP1-GI-NeveimY6c',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }
        );

        return Response.json({});
    } catch (error) {
        console.log(error);
        return Response.json({ error: 'Failed fetching data' }, { status: 500 });
    }
};
