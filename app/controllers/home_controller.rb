class HomeController < ApplicationController
  def index
    render inertia: 'pages/Home', props: {
      name: 'Joe'
    }
  end
end
