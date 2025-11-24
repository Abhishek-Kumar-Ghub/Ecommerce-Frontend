import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { Upload, X } from 'lucide-react'
import axios from 'axios'

const AdminProductForm = () => {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: ''
  })
  const [images, setImages] = useState([])
  const [previews, setPreviews] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length + images.length > 5) {
      setMessage('Maximum 5 images allowed')
      return
    }

    setImages([...images, ...files])
    
    const newPreviews = files.map(file => URL.createObjectURL(file))
    setPreviews([...previews, ...newPreviews])
  }

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index)
    const newPreviews = previews.filter((_, i) => i !== index)
    setImages(newImages)
    setPreviews(newPreviews)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const formDataToSend = new FormData()
    formDataToSend.append('title', formData.title)
    formDataToSend.append('description', formData.description)
    formDataToSend.append('category', formData.category)
    formDataToSend.append('price', formData.price)
    
    images.forEach(image => {
      formDataToSend.append('images', image)
    })

    try {
      const response = await axios.post('/product/add', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      
      setMessage('Product created successfully!')
      setFormData({ title: '', description: '', category: '', price: '' })
      setImages([])
      setPreviews([])
    } catch (error) {
      setMessage(error.message || 'Error creating product')
    } finally {
      setLoading(false)
    }
  }

  if (user?.role !== 'admin') {
    return <div className="text-center py-8">Access denied. Admin only.</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows="3"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Images (Max 5)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
          
          {previews.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-2">
              {previews.map((preview, index) => (
                <div key={index} className="relative">
                  <img src={preview} alt={`Preview ${index}`} className="w-full h-20 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {message && (
          <div className={`p-3 rounded ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Product'}
        </button>
      </form>
    </div>
  )
}

export default AdminProductForm