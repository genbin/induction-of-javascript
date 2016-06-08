Fix for: Permission denied to access property 'toString' 


Hi guys,
when developing a game that runs in an iframe (Facebook canvas) I encountered this error message in the JavaScript console:

Permission denied to access property 'toString'

I'm using the Flash plugin and it turned out to be a security mechanism of Flash, which disallows to pull content from another domain. Although the Flash plugin and MP3s are hosted on the same domain, the iframe let's Flash consider it as a cross-domain access. The domain, from which the content should be downloaded, needs to allow the access.

To solve this issue I had to place a crossdomain.xml file in the root of our domain.

<cross-domain-policy>
    <site-control permitted-cross-domain-policies="all"/>
    <allow-access-from domain="*" />
    <allow-http-request-headers-from domain="*" headers="*"/>
</cross-domain-policy>

I know this is not an error report, but I'm certain someone else will hit the same problem, hence I want this knowledge to be shared.

Cheers,
Robert

Sources:

http://willperone.net/Code/as3error.php

https://www.adobe.com/devnet/articles/crossdomain_policy_file_spec.html