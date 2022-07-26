import  sanityClient  from "@sanity/client";
const client = sanityClient({
    projectId:"49p80opi",
    dataset:'production',
    apiVersion:'2021-10-21',
    token:"skacZjMddbemSBtvpkCpsUrEO5oD4RAfDCkFvVArQ7xiWTusBpvZg5Z3CJl0LLqbJpw1W0NkhAtVPWbu99qapGWZ1rkE2t62p0THikF7ycAJ0NYXhTRpud0hISCrOGkaoLoh26BnchG14Qm1vkg5UuJWPxXgyEaqpTq8qO3fI6CWlS4n3Mam",
    useCdn:false,
})
module.exports=client;