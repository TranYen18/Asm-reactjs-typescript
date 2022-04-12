import React  from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../../api/category';
import { TypeCategory } from '../../type/category';
import { isAuthenticate } from '../../utils/localStorage'
import { useEffect } from 'react'

type UpdateCategoryProps = {
    onEditCate: (category: TypeInput, user: any, token: any) => void
}
type TypeInput = {
    name:string
}

const CategoryEdit = (props: UpdateCategoryProps) => {
  const navigate = useNavigate()
  const { id }: any = useParams();
  const { register, handleSubmit, reset } = useForm<TypeInput>();

  useEffect(() => {
      const getCategory = async () => {
          const { data } = await read(id);
          reset(data)
      }
      getCategory()
  }, [])
  const { user, token } = isAuthenticate()
  const onUpdateCate: SubmitHandler<TypeInput> = (data: any) => {
      props.onEditCate(data, user, token);
      navigate("/admin/category");
  }

  return (
    <div><form onSubmit={handleSubmit(onUpdateCate)}>
            <div className="mb-3">
                <label className="form-label">Name Category</label>
                <input type="text" {...register("name")} className="form-control" />
            </div>
            <button className="btn btn-primary">Cập nhật</button>
        </form></div>
  )
}

export default CategoryEdit