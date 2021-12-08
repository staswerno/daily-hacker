export default function HackerContent( { newsItems } ) {

    return (
    
        (newsItems.map(({ title, url, author, created_at }) => (
        <div className="HackerContent">
        <div className="NewsTitle"><a href={url}>{title}</a></div>
        <div className="NewsAuthor">written by {author} on {created_at.substr(0, 10)}</div>
        </div>)))
    
        )
        
}