export default async (request, context) => {
    try {
        const data = await request.json();
        const sentryEventData = data?.data?.event;
        console.log(data);
        const { title, web_url, contexts } = sentryEventData || {};

        // we should ignore sending to the gchat channel if it's a simulator
        const isSimulator = contexts?.device?.simulator;

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
