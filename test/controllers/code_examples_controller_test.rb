require 'test_helper'

class CodeExamplesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get code_examples_index_url
    assert_response :success
  end

end
