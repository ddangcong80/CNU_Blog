import { useMutation } from '@tanstack/react-query';
import { TAG } from '../api/types.ts';
import { createPost } from '../api';

const useCreatePost = () => {
  const mutation = async ({ title, contents, tag }: { title: string; contents: string; tag: TAG }) => {
    await createPost(title, contents, tag);
  };

  return useMutation({
    mutationKey: ['createPost'],
    mutationFn: mutation,
  });
};

export default useCreatePost;
