const POSTS_QUERY_LIMIT = 15;
const POSTS_ON_PAGE_LIMIT = 9;
const FLOW_FANPAGE_ID = '237155179662697';
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

export const getNewsIds = async () => {
    try {
        const res = await fetch(
            `https://graph.facebook.com/${FLOW_FANPAGE_ID}/feed?access_token=${ACCESS_TOKEN}&fields=id,from{id}&limit=${POSTS_QUERY_LIMIT}`,
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

const createIdsObjects = (payload) => {
    return payload.data?.
        filter(post => post.from.id === FLOW_FANPAGE_ID).
        slice(0, POSTS_ON_PAGE_LIMIT).
        map(post => mapIds(post)) || [];
}

const mapIds = (post) => {
    const ids = post.id.split('_');

    return { fanpageId: ids[0], postId: ids[1] }
}
