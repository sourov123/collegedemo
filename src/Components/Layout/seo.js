
export default function seo(data = {}) {
    data.title = data.title || 'Department of Computer Science';
    data.metaDescription = data.metaDescription || 'Department of Computer Science';
    
    document.title = data.title;
    document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
    return (
        <></>
    )
}
