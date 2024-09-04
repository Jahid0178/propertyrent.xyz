"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { FiUpload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";

interface ImagePreviewUploaderProps {
  form: any;
  name: string;
}

const ImagePreviewUploader = ({ form, name }: ImagePreviewUploaderProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];

    for (let file of files) {
      // Check file size limit of 1MB
      if (file.size > 1 * 1024 * 1024) {
        toast.error("File size exceeds limit of 1MB");
        e.target.value = "";
        return;
      }
    }

    // Check if any file is duplicated
    const isDuplicated = (file: File, fileList: File[]) => {
      return fileList.some((existingFile) => existingFile.name === file.name);
    };

    // Filter out duplicated files
    const uniqueFiles = files.filter((file) => {
      if (isDuplicated(file, uploadedFiles)) {
        toast.error("File already uploaded");
        return false;
      }
      return true;
    });

    // Add unique files to the state
    setUploadedFiles((prevFiles) => [...prevFiles, ...uniqueFiles]);
  };

  const handleFileRemove = (file: File) => {
    const updatedFiles = uploadedFiles.filter((f) => f !== file);
    setUploadedFiles(updatedFiles);
  };

  useEffect(() => {
    let formData = new FormData();

    [...uploadedFiles].forEach((file, ind) => {
      formData.append(name, file);
    });

    form.setValue(name, formData);
  }, [uploadedFiles]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <label
        htmlFor="image-upload"
        className="w-full h-full p-20 border rounded-md flex justify-center items-center"
      >
        <FiUpload size={50} color="#d0d0d0" />
        <Input
          type="file"
          onChange={handleFileChange}
          multiple
          className="hidden"
          id="image-upload"
          name={name}
        />
      </label>

      {uploadedFiles &&
        uploadedFiles.map((file, index) => {
          const imageURL = URL.createObjectURL(file);
          const imageName = file.name;

          if (typeof imageURL !== "string") {
            return null;
          }

          return (
            <div
              className="relative w-full h-full rounded-md overflow-hidden"
              key={index}
            >
              <Button
                onClick={() => handleFileRemove(file)}
                className="absolute top-2 right-2"
                variant="destructive"
                size="icon"
              >
                <IoMdClose size={20} />
              </Button>
              <Image
                src={imageURL}
                alt={imageName}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
    </div>
  );
};

export default ImagePreviewUploader;
