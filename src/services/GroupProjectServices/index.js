import wrapper from '../wrapper'

const getAll = async () => {

    try {
        var resp = await wrapper({
            method: 'get',
            url: '/group_projects/'
        });
        return resp;
    } catch (error) {
        console.log('erro:' + error)
    }
}

export default getAll;