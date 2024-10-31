class Web::ApplicationSerializer < ApplicationSerializer
  def attributes(*args)
    hash = super(*args)
    hash.transform_keys { |key| key.to_s.camelize(:lower) }
  end
end
