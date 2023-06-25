import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Textarea from '@/components/Input/Textarea'

interface Props {
  handleSubmit: (e: React.SyntheticEvent) => Promise<void>
}
const CreatePost = ({ handleSubmit }: Props) => {
  return (
    <form className="flex-1 flex flex-col gap-5 justify-center items-start" onSubmit={handleSubmit}>
      <h2 className="text-4xl font-bold">Add New Post</h2>
      <Input name="title" placeholder="Title" type="text" tailwindProperties="w-full" />
      <Input name="desc" placeholder="Desc" type="text" tailwindProperties="w-full" />
      <Input name="img" placeholder="Image url" type="text" tailwindProperties="w-full" />
      <Textarea name="content" placeholder="Content" rows={10} tailwindProperties="w-full" />
      <Button text="Post" tailwindProperties="w-full" />
    </form>
  )
}
export default CreatePost
