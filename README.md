# FlipFit-Feed

# run service
nest start
# build images: 
docker build -t flip-fit-posts .
docker run -it -p 5001:3000 flip-fit-posts