# 2G News

A news website based around the idea that if you can make a website load quickly on a 2G mobile phone, it will feel instantaneous on most other platforms.

So using content from (The Guardian newspaper's open platform)[http://open-platform.theguardian.com/] the bare minimal (without looking too ugly) HTML, CSS and JS. You can get the latest headlines to your phone, tablet or desktop, without using too much data or waiting forever.

So on the front end along with minimal code where possible, we are using Cloudfront as a CDN and using the device detection headers, to serve two different templates, one with images for desktop and one without for other devices. 

Then on the back end we are using Node and Express running on pair of small Heroku Dynos, these consume the content, put them into a template, minify the code and GZIP it all up.

This means we end up with a page of around 7KB with 12 news headlines, summaries and links to the AMP versions of the full stories. For desktop devices we also load a placeholder image of about 1KB, followed by lazy loading the images which come to around 300KB in total (no control over the size of these, due to terms of the Open Platform).

So compared to the average news website section page being between 3-5MB, a page of between 7-300KB is a massive saving, helping to reduce page loads and minimise data usage for those on metered plans.
