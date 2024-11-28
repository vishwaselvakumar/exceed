import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createServiceCard } from "../store/serviceCard/serviceCard";
import { FormContext } from "antd/es/form/context";

function ServiceCardCreateForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [form, setForm] = useState({
    heading: "",
    description: {
      paragraph: "",
      features: [],
      listType: "",
    },
    imageurl: "",
  });
  const [featureInput, setFeatureInput] = useState(""); // New state for feature input
  const { serviceCard, loading, error } = useSelector(
    (state) => state.serviceCard.createServiceCard
  );
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("description")) {
      setForm((prevForm) => ({
        ...prevForm,
        description: {
          ...prevForm.description,
          [name.split(".")[1]]: value, // Dynamically setting paragraph or features based on name
        },
      }));
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }

    if (name === "imageurl") {
      setImageUrl(value);
    }
  };

  const handleFeatureInputChange = (e) => {
    setFeatureInput(e.target.value); // Update the feature input state
  };

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setForm({
        ...form,
        description: {
          ...form.description,
          features: [...form.description.features, featureInput.trim()],
        },
      });
      setFeatureInput(""); // Clear the input after adding
    }
  };

  const handleRemoveFeature = (index) => {
    const newFeatures = [...form.description.features];
    newFeatures.splice(index, 1); // Remove the feature at the specified index
    setForm({
      ...form,
      description: {
        ...form.description,
        features: newFeatures,
      },
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageUrl(reader.result);
      };

      reader.readAsDataURL(file);

      setForm({
        ...form,
        image: file,
        imageurl: "", // Clear imageurl when a file is selected
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("heading", form.heading);
    formData.append("description", JSON.stringify(form.description));
    formData.append("imageurl", form.imageurl);

    dispatch(createServiceCard(formData));
    setForm({
      heading: "",
      description: {
        paragraph: "",
        features: [],
        listType: "",
      },
      imageurl: "",
    });
  };

  const clearImage = () => {
    setForm({ ...form, image: null });
    setImageUrl("");
  };

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
              <div>
                <label className="sr-only">Product photo</label>
                <div className="grid sm:flex sm:items-center sm:gap-x-5"></div>
              </div>

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
                  className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows="6"
                  placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
                ></textarea>
              </div>

              {/* Feature Input */}
              <div className="space-y-2">
                <label
                  htmlFor="feature"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Add Feature
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    id="feature"
                    name="description.features"
                    value={featureInput}
                    onChange={handleFeatureInputChange}
                    className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Enter feature"
                  />
                  <button
                    type="button"
                    onClick={handleAddFeature}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Display added features with remove button */}
              {form.description.features.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-medium text-sm text-gray-800">Features:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {form.description.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex justify-between items-center">
                        {feature}
                        <button
                          type="button"
                          onClick={() => handleRemoveFeature(index)}
                          className="ml-3 text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-2">
                <label
                  htmlFor="listtype"
                  className="block text-sm font-medium text-gray-800 mt-2.5"
                >
                  List Type
                </label>
                <select
                  name="description.listType"
                  id="listtype"
                  className="text-black"
                  value={form.description.listType}
                  onChange={handleInputChange}
                >
                  <option value="disc">Disc</option>
                  <option value="decimal">Decimal</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-3 text-sm font-medium text-center text-white rounded-md border border-transparent bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition dark:focus:ring-offset-gray-800"
              >
                Create Card
              </button>
            </div>

            {error && <p className="text-red-500 mt-3">{error.message}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ServiceCardCreateForm;
