import { Link } from "react-router-dom";
import Input from "../components/Atom/Input";
import Label from "../components/Atom/label";
import TextArea from "../components/Atom/Textarea";
const SettingsPage = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <Link to="/">
        <h1
          className="text-4xl font-bold mb-8  px-6 text-center sm:text-left text-blue-600"
          role="heading"
          aria-level="1"
        >
          WatchSite
        </h1>
      </Link>
      <div className="flex flex-col md:flex-row">
        <aside className="md:w-1/4 px-4  mb-4 md:mb-0" role="navigation">
          <ul className="bg-white shadow rounded-lg divide-y">
            <li className="p-4 hover:bg-gray-100">
              <a
                href="#account"
                className="text-indigo-700 hover:text-indigo-900"
                role="menuitem"
              >
                Account
              </a>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <a
                href="#privacy"
                className="text-indigo-700 hover:text-indigo-900"
                role="menuitem"
              >
                Privacy
              </a>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <a
                href="#notifications"
                className="text-indigo-700 hover:text-indigo-900"
                role="menuitem"
              >
                Notifications
              </a>
            </li>
            {/* ...other categories */}
          </ul>
        </aside>
        <main className="md:w-3/4 p-4 bg-white shadow rounded-lg" role="main">
          {/* Account Section */}
          <section id="account" aria-labelledby="account-heading">
            <h2 className="text-2xl font-bold mb-4" id="account-heading">
              Account Settings
            </h2>
            <form
              action=""
              onSubmit={() =>
                alert("Thanks for filling the form this is a demo")
              }
              className="flex flex-col justify-center md:justify-start"
            >
              <div className="mb-6">
                <Label text="Username" htmlfor="username" />
                <Input type="text" name="username" placeholder="dzakyrazi" />
              </div>
              <div className="mb-6">
                <Label htmlfor="email" text="Email Address" />
                <Input
                  type="email"
                  placeholder="user@example.com"
                  name="email"
                />
              </div>
              <div className="mb-6">
                <Label htmlfor="password" text="password" />
                <Input type="password" name="password" placeholder="••••••••" />
              </div>
              <div>
                <Label htmlfor="complaint" text="Details (optional)" />
                <TextArea
                  name="complaint"
                  placeholder="explain your details that you wanna share"
                />
              </div>
              <button
                className="bg-blue-600 md:w-1/3   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
                role="button"
              >
                Save Changes
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
