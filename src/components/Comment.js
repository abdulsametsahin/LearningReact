import React from 'react';

const Comment = () => {
    var d = document, s = d.createElement('script');
    s.src = 'https://asametsahin.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);

    return (
        <div>
            <div id="disqus_thread"></div>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </div>
    );
}

export default Comment;
