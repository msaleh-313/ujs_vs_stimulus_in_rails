Rails.application.routes.draw do
  root "searches#index"
  get "/distraction", to: "searches#distraction"
  get "/clipboard_action", to: "searches#clipboard_action"

  get "/slideShow", to: "searches#slideShow"
end
