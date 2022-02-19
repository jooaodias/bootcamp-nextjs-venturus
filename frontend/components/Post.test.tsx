import { render, screen } from '@testing-library/react';
import Post from './Post';
import userEvent from '@testing-library/user-event';

describe('Post', () => {
  test('Render post component', () => {
    const post = {
      id: 1,
      title: 'My post',
      picture: 'mt-post.png',
      content: 'My post content',
    };
    render(
      <Post
        post={post}
        updatePostHandler={jest.fn()}
        deletePostHandler={jest.fn()}
      />
    );
    expect(screen.getByText('My post')).toBeTruthy();
    const deleteButton = screen.getByText('Delete');
    userEvent.click(deleteButton);
  });

  test('Update post', () => {
    const post = {
      id: 1,
      title: 'My post',
      picture: 'mt-post.png',
      content: 'My post content',
    };
    render(
      <Post
        post={post}
        updatePostHandler={jest.fn()}
        deletePostHandler={jest.fn()}
      />
    );
    const deleteButton = screen.getByText('Update');
    userEvent.click(deleteButton);
  });
});
