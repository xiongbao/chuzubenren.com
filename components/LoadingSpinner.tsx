export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      <span className="ml-3 text-gray-600">加载中...</span>
    </div>
  )
}
