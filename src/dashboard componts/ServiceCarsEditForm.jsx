import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteservice, getServiceById, updateServiceCard } from '../store/serviceCard/serviceCard';
import { useNavigate, useParams } from 'react-router-dom';


function ServiceCarsEditForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
const navigate=useNavigate()
  // Fetching service details and updateServiceCard status from Redux store
  const { service } = useSelector((state) => state.serviceCard);
  const { loading, error, success } = useSelector((state) => state.serviceCard.updateServiceCard);

  // Preload initial state
  const [imageUrl, setImageUrl] = useState('');
  const [featureInput, setFeatureInput] = useState(''); // Add state for feature input
  const [form, setForm] = useState({
    heading: '',
    description: {
      paragraph: '',
      features: [],
      listType: '',
    },
    imageurl: '',
  });

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split('.');  // To handle nested properties like description.paragraph

    setForm((prevState) => {
      if (nameParts.length > 1) {
        return {
          ...prevState,
          [nameParts[0]]: {
            ...prevState[nameParts[0]],
            [nameParts[1]]: value,
          },
        };
      }
      return {
        ...prevState,
        [name]: value,
      };
    });

    if (name === 'imageurl') {
      setImageUrl(value);  // Set the image URL preview on change
    }
  };

  // Handle file change for image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // Preview image on file selection
      };
      reader.readAsDataURL(file);

      setForm({
        ...form,
        image: file,
        imageurl: '',  // Clear image URL when a file is selected
      });
    }
  };

  // Submit form data to update the service card
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('heading', form.heading);
    formData.append('description', JSON.stringify(form.description));
    formData.append('imageurl', form.imageurl);

    if (form.image) {
      formData.append('image', form.image); // Append image if available
    }

    dispatch(updateServiceCard({ id, updatedCard: formData }));
  };

  // Clear the selected image and reset the form state
  const clearImage = () => {
    setForm({ ...form, image: null, imageurl: '' });
    setImageUrl('');
  };

  // Fetch service details by ID on component mount
  useEffect(() => {
    if (id) {
      dispatch(getServiceById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    // Update form fields when service data is fetched
    if (service) {
      setForm({
        heading: service.heading || '',
        description: {
          paragraph: service.description?.paragraph || '',
          features: service.description?.features || [],
          listType: service.description?.listType || '',
        },
        imageurl: service.imageurl || '',
        image: null,  // Assuming image needs to be selected/uploaded by user
      });
      setImageUrl(service.imageurl || '');
    }
  }, [service]);

  // Handle adding a new feature
  const handleAddFeature = () => {
    if (featureInput && !form.description.features.includes(featureInput)) {
      setForm({
        ...form,
        description: {
          ...form.description,
          features: [...form.description.features, featureInput],
        },
      });
      setFeatureInput(''); // Clear the input after adding feature
    }
  };

  // Handle removing a feature
  const handleRemoveFeature = (index) => {
    const updatedFeatures = form.description.features.filter((_, idx) => idx !== index);
    setForm({
      ...form,
      description: {
        ...form.description,
        features: updatedFeatures,
      },
    });
  };

  const handleDelete = () =>{
    dispatch(deleteservice({id}));
    navigate("/Admindashboard/service-cards")
  }

  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-xl shadow">
          <div className="relative h-[20rem] object-cover rounded-t-xl bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Uploaded"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
              />
            )}
            <div className="absolute top-0 end-0 p-4">
              <button
                type="button"
                onClick={clearImage}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              >
                Delete
              </button>
            </div>
          </div>

          <div className="pt-0 p-4 sm:pt-0 sm:p-7">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-project-name"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Service Card Title
                </label>
                <input
                  id="af-submit-app-project-name"
                  name="heading"
                  type="text"
                  value={form.heading}
                  onChange={handleInputChange}
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none -900"
                  placeholder="Service Card Title"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-image-url"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Image URL
                </label>
                <input
                  id="af-submit-app-image-url"
                  name="imageurl"
                  type="text"
                  value={form.imageurl}
                  onChange={handleInputChange}
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none -900"
                  placeholder="Image URL"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-description"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Description
                </label>
                <textarea
                  id="af-submit-app-description"
                  name="description.paragraph"
                  value={form.description.paragraph}
                  onChange={handleInputChange}
                  className=" textareas py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows="6"
                  placeholder="A detailed summary will better explain your products to the audience."
                ></textarea>



      {/* <textarea
        id="af-submit-app-description"
        name="description.paragraph"
        value={description}
        onChange={handleInputChange}
        className="py-2 px-3 w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
        rows="6"
        placeholder="A detailed summary will better explain your products to the audience."
         ></textarea> */}

              


              </div>

              {/* Features Section */}
              <div className="space-y-2">
                <label
                  htmlFor="feature-input"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Add Feature
                </label>
                <input
                  id="feature-input"
                  type="text"
                  onChange={(e) => setFeatureInput(e.target.value)}
                  value={featureInput}
                  className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Add feature"
                />
                <button
                  type="button"
                  onClick={handleAddFeature}
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
                >
                  Add Feature
                </button>

                <ul className="mt-3 space-y-2">
                  {form.description.features.map((feature, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{feature}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveFeature(index)}
                        className="text-red-600"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* List Type */}
              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-listType"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  List Type
                </label>
                <select
                  id="af-submit-app-listType"
                  name="description.listType"
                  value={form.description.listType}
                  onChange={handleInputChange}
                  className="py-2 px-3 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="disc">Disc</option>
                  <option value="decimal">Decimal</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 sm:p-7 flex justify-between">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 focus:outline-none"
            >
              {loading ? 'Updating...' : 'Update Service Card'}
            </button>

            <button
            onClick={handleDelete}
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white text-sm font-medium rounded-lg shadow hover:bg-red-700 focus:outline-none"
            >
              Delete
            </button>

          </div>
        </div>
      </form>
    </div>
  );
}

export default ServiceCarsEditForm;
