"use client"
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


function Popupview({ postTitle, postBody }) {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleClickM = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="font-semibold text-lg" onClick={handleClickM}>
        Blog
      </button>

      {isOpen && (
        <div
          className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background backdrop-filter z-10"
          ref={popupRef}
        >
          <div className="h-1/2 w-1/2 bg-dro_yellow shadow-lg">
            <div className="flex flex-row justify-between">
              <h2 className="text-2xl px-10 py-6 font-bold animate-bounce">Blog Here</h2>
              <div className="relative">
                <div className="card py-6 px-16"></div>
              </div>
            </div>
            <div>
              <div className="px-10 py-3 h-52 w-full">
                <div className="px-10 h-11 w-full">
                  <textarea
                    id="title"
                    className="h-10 w-full border py-3 border-dro_gray px-4 text-md text-dro_black resize-none"
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={postTitle}
                    onChange={() => {}}
                  />
                </div>
                <div className="px-10 h-52 w-full">
                  <textarea
                    id="content"
                    className=" h-full w-full border border-dro_gray px-4 text-md text-dro_black resize-none"
                    placeholder="Write Your Blog Here"
                    name="body"
                    value={postBody}
                    onChange={() => {}}
                  />
                  <div className="flex justify-center items-center">
                    <button className="flex justify-center items-center px-10 w-32 h-10 bg-dro_green text-white">
                      POST
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="flex flex-col">
            <h1 className="bg-dro_yellow p-5 ml-5">{postTitle}</h1>
            <div>{postBody}</div>
          </div>
        </div>
      )}
    </div>
  );
}

const BlogPost = () => {
  const [post, setPost] = useState({ title: '', body: '' });
  const [newPostData, setNewPostData] = useState({ title: '', body: '' });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/api/blog/')
      .then((response) => setPost(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handlePostButtonClick = () => {
    axios
      .post('http://localhost:8000/api/api/blog/', newPostData)
      .then((response) => {
        console.log(response.data.title);
        console.log(response.data.body);
        console.log('Post created successfully!');

        setPost(response.data);
      })
      .catch((error) => console.error(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(post.title);
  }, [post]);

  const handleClickM = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="font-semibold text-lg" onClick={handleClickM}>
        Blog
      </button>

      {isOpen && (
        <Popupview postTitle={post.title} postBody={post.body} />
      )}

      {/* Rest of your component code */}
    </div>
  );
};

export default BlogPost;

// # @api_view(['GET', 'POST'])
// # @permission_classes([IsAuthenticated])
// # def create_blog_post(request):
// #     if request.method == 'GET':
// #         blog_post = BlogPost.objects.get(id=request.GET.get('id'))
// #         serializer = BlogPostSerializer(blog_post)
// #         return Response(serializer.data, status=status.HTTP_200_OK)

// #     elif request.method == 'POST':
// #         serializer = BlogPostSerializer(data=request.data)
// #         if serializer.is_valid():
// #             serializer.save(user=request.user)
// #             return Response(serializer.data, status=status.HTTP_201_CREATED)
// #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

// # @api_view(['POST', 'PUT', 'PATCH'])
// # @permission_classes([IsAuthenticated])
// # def create_or_update_blog_post(request):
// #     if request.method == 'POST':
// #         serializer = BlogPostSerializer(data=request.data)
// #         if serializer.is_valid():
// #             serializer.save(user=request.user)
// #             return Response(serializer.data, status=status.HTTP_201_CREATED)
// #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

// #     blog_post = get_object_or_404(BlogPost, pk=request.data.get('id'))
// #     serializer = BlogPostSerializer(blog_post, data=request.data, partial=True)

// #     if serializer.is_valid():
// #         serializer.save(user=request.user)
// #         return Response(serializer.data)
// #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

// # @api_view(['PUT', 'PATCH'])
// # @permission_classes([IsAuthenticated])
// # def update_blog_post(request, pk):
// #     try:
// #         blog_post = BlogPost.objects.get(pk=pk, user=request.user)
// #     except BlogPost.DoesNotExist:
// #         return Response({'error': 'Blog post not found.'}, status=status.HTTP_404_NOT_FOUND)

// #     serializer = BlogPostSerializer(blog_post, data=request.data, partial=True)
// #     if serializer.is_valid():
// #         serializer.save()
// #         return Response(serializer.data)
// #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

// # @api_view(['GET'])
// # @permission_classes([IsAuthenticated])
// # def get_single_picture(request,id):
// #     serializer = BlogPost.objects.get(id=request.GET.get('id'))
// #     if serializer.is_valid():
// #         serializer.save()
// #     return Response(serializer.data, status=status.HTTP_200_OK)
   
// # @api_view(['POST'])
// # @permission_classes([IsAuthenticated])
// # def a_blog_post_added(request):
// #     serializer = BlogPostSerializer(data=request.data)
// #     if serializer.is_valid():
// #                 serializer.save(user=request.user)
// #                 return Response(serializer.data, status=status.HTTP_201_CREATED)
// #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

// # def update(self, instance, validated_data):
// #     # Update an existing blog post
// #     instance.image = validated_data.get('image', instance.image)
// #     instance.title = validated_data.get('title', instance.title)
// #     instance.description = validated_data.get('description', instance.description)
// #     instance.save()
// #     return instance

// # accounts/serializers.py