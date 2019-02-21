# tailwind

This is a hello world example of the [tailwindcss](https://github.com/tailwindcss/tailwindcss)
library. This is a modern and straight forward library for modifying css. I was
starting to explore and understand css. I.e. how to make the html pages not
look terrible. 

## Server

go run main.go

## Client

Change into client dir

```
cd client
```

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

### Usage 

This snippet creates a floating business card in the Vue cli hello world. 

```
    // Tailwind component
    <div class="container mx-auto py-10">
      <div
        class="border m-6 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
      >
        <div class="sm:flex sm:items-center px-6 py-4">
          <img
            class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
            src="https://api.adorable.io/avatars/196/abott@adorable.png"
            alt
          >
          <div class="text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="text-xl leading-tight">Jane Doe</p>
              <p class="text-sm leading-tight text-grey-dark">Software Developer at fancy FAANG corp.</p>
            </div>
            <div class="flex flex-wrap">
              <button
                class="text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-white"
              >Call</button>
              <button
                class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white"
              >Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
```


### Reference

[Vue tailwind article](https://medium.com/backticks-tildes/how-to-configure-your-vue-js-app-to-use-tailwind-css-a6f95d06e1c7)