# Dev Stack

An responsive simple todo app where you can add your favorite tech stacks.
---

## Features

- Dynamic Navigation & Hero Banner
- **Interactive Stack Sandbox:** A 2-column dashboard design featuring a live-updating, sticky sidebar where items can be stacked or discarded seamlessly.
- Micro-Interactions & Transitions
---

## Tech Stack

- **Framework:** React (TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS & daisyUI
- **Icons:** React Icons
- **Notifications:** React Toastify

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com
cd dev-stack-builder
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open your local address (usually `http://localhost:5173`) in your browser to view the application.


# 📝 React & Core Programming Concepts Q&A

A simple, beginner-friendly guide covering fundamental React paradigms, hooks, and architectural mechanics.

---

### 1. What is JSX, and why is it used in React?
* **What it is:** **JSX** stands for JavaScript XML. It is a markup syntax extension that allows you to write HTML-like structures directly inside your JavaScript/TypeScript files.
* **Why we use it:** Instead of writing complex document generation methods (`React.createElement`), JSX lets you write plain, declarative tags like `<button>` or `<h1>`. This makes components highly readable, visual, and **efficient to maintain**.


---

### 3. What does the `useState` hook do, and where did you use it in this project?
* **What it does:**  It provides a reactive variable to hold your data and a setter function to modify that data.
* **Where we used it:** 
  1. In the **Navbar** component to remember whether the responsive mobile hamburger drawer layout is currently open or closed (`isOpen`).
  2. In the **TechStacks** dashboard to track the active category filter selection (`activeCategory`) and manage the array list of custom utilities compiled by the user (`selectedTechs`).

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
* **The Reason:** React manages screen updates using a Virtual DOM comparison system. When a mapped array changes (such as filtering lists or removing items), React uses the unique `key` identifier as a **stable label** to track elements. This allows React to instantly identify exactly which DOM node needs modification, ensuring the application stays blazing fast rather than wastefully rebuilding the whole list from scratch.

---

### 6. What is conditional rendering? Show one place you used it.
* **What it is:** Conditional rendering is the process of **displaying or hiding specific layout blocks based on true/false variables** (similar to working with an `if/else` statement inside HTML logic).
* **Where we used it:** We implemented this pattern directly inside the `SelectedStack` component to determine whether to output an empty dashboard placeholder or compile the active selection tree:
  ```jsx
  {selectedTechs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center text-slate-500 text-sm gap-2">
            <p>No technologies selected yet.</p>
            <p className="text-xs text-slate-600">
              Click "Add to Stack" on any item.
            </p>
          </div>
        ) : (
          <div className="mt-4 flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
            {selectedTechs.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between bg-neutral-900 border border-neutral-800/80 p-3 rounded-xl transition-all hover:border-neutral-700"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-neutral-800 p-1.5 rounded-lg border border-neutral-700">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold text-white">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
                      {tech.category}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(tech.id)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-neutral-800 transition-colors"
                >
                  <FiX className="text-base" />
                </button>
              </div>
            ))}
          </div>
        )}
  ```

---

### 7. How do you pass data down to a child, and how does a child send something back?
* **Passing data down (Parent to Child):** You transmit information downstream using custom **Props**, which are appended to components exactly like standard HTML attributes.
  * *Parent Side:* `<TechCard tech={singleTechObject} />`
  * *Child Side:* Automatically reads the `tech` prop to output its metadata titles and icons.
* **Sending data back (Child to Parent):** A child component cannot directly manipulate its parent's scope.

