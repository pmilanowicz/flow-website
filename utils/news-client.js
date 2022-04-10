const POSTS_LIMIT = 9;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

export const getNewsIds = async () => {
    try {
        const res = await fetch(
            `https://graph.facebook.com/flow.ultimate.wroclaw/feed?access_token=${ACCESS_TOKEN}&fields=id&limit=${POSTS_LIMIT}`,
            {
                method: "GET",
            }
        );

        return createIdsObjects(await res.json());
    } catch (e) {
        console.log('Cannot get news', e);
        return [];
    }
}

const createIdsObjects = (data) => {
    return data?.map(post => mapIds(post)) || [];
}

const mapIds = (post) => {
    const ids = post.id.split('_');

    return { fanpageId: ids[0], postId: ids[1] }
}