require "js-routes"

def generate_routes(root, **options)
  routes_dir = Rails.root.join(root)

  desc("Generate JS routes")
  task(generate: :environment) do
    FileUtils.mkdir_p(routes_dir)

    routes_file_name = File.join(root, "routes.js")
    JsRoutes.generate!(routes_file_name, **options)
  end
end

namespace :js_routes do
  generate_routes("packs/web", camel_case: true, include: [ /web/ ])
end
